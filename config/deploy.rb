# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "bms"
set :user,  ENV["user"] || ENV["USER"] || "deploy"

set :scm, nil

# Multistage Deployment #
#####################################################################################
set :stages,              %w(dev uat prod)
set :default_stage,       "dev"


# Other Options #
#####################################################################################
set :ssh_options,         { :forward_agent => true }
set :default_run_options, { :pty => true }


# Permissions #
#####################################################################################
set :use_sudo,            true
set :permission_method,   :acl
set :use_set_permissions, true
set :webserver_user,      "deploy"
set :group,               "www-data"
set :keep_releases,       3


# Set current time #
#######################################################################################
require 'date'
set :current_time, DateTime.now
set :current_timestamp, DateTime.now.to_time.to_i


# Setup Tasks #
#######################################################################################
# namespace :setup do
#     desc "Create overlay folders"
#     task :create_overlay_folder do
#         on roles(:all) do
#             execute "mkdir -p #{fetch(:overlay_path)}"
#         end
#     end

#     desc "Set up project"
#     task :init do
#         on roles(:all) do
#             invoke "setup:create_overlay_folder"
#         end
#     end
# end


# DevOps Tasks #
#######################################################################################
namespace :devops do
end


# Installation Tasks #
#######################################################################################
namespace :installation do

    desc "Create ver.txt"
    task :create_ver_txt do
        on roles(:all) do
            puts ("--> Copying ver.txt file")
            execute "cp #{release_path}/config/deploy/ver.txt.example #{release_path}/public/ver.txt"
            execute "sed --in-place 's/%date%/#{fetch(:current_time)}/g
                        s/%branch%/#{fetch(:branch)}/g
                        s/%revision%/#{fetch(:current_revision)}/g
                        s/%deployed_by%/#{fetch(:user)}/g' #{release_path}/public/ver.txt"
            execute "find #{release_path}/public -type f -name 'ver.txt' -exec chmod 664 {} \\;"
        end
    end
end

# Tasks Execution #
#######################################################################################
desc "Copy dist file to server and extract"
task :upload_dist_file do
    on roles(:all) do
        execute "mkdir -p #{releases_path}/#{now}"
        execute "rm -rf #{fetch(:app_dir_name)}/temp/*"
        upload! "dist/dist.zip", fetch(:tmp_dir)
        execute "unzip /home/deploy/#{fetch(:app_dir_name)}/temp/dist.zip -d #{fetch(:app_dir_name)}/temp"
    end
end

desc "Move files to release folder"
task :move_files do
    on roles(:all) do
        within fetch(:tmp_dir) do
            execute "cp -a #{fetch(:tmp_dir)}/#{fetch(:application)}/. #{releases_path}/#{now}/"
        end
    end
end

# desc "Setup Initialize"
# task :setup_init do
#     invoke "setup:init"
# end


desc "Deploy Application"
namespace :deploy do
    after :started, "upload_dist_file"
    after :started, "move_files"
end




