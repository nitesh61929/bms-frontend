server '165.232.184.226',
user: 'deploy',
roles: %w{web app},
port: 22

# Directory to deploy
# ===================
set :env, 'dev'
set :app_debug, 'true'
set :app_dir_name, 'ownant'
set :deploy_to, '/home/deploy/ownant/ownant-frontend'
set :shared_path, '/home/deploy/ownant/ownant-frontend/shared'
set :tmp_dir, '/home/deploy/ownant/temp'
set :site_url, '165.232.184.226'
