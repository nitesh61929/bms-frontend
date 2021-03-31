server '13.126.87.140',
user: 'deploy',
roles: %w{web app},
port: 22

# Directory to deploy
# ===================
set :env, 'prod'
set :app_debug, 'true'
set :app_dir_name, 'ownant'
set :deploy_to, '/home/deploy/ownant/ownant-frontend'
set :shared_path, '/home/deploy/ownant/ownant-frontend/shared'
set :tmp_dir, '/home/deploy/ownant/temp'
set :site_url, '13.126.87.140'
