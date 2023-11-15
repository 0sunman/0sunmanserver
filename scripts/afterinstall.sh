cd /home/ec2-user/build
sudo npm install
sudo npm run build
sudo pm2 kill
sudo pm2 start dist/main.js --name 0sunservermanapplication