node-aws
========

AWS node

http://vanjakom.wordpress.com/2011/12/12/node-js-on-amazon-ec2/

yum install gcc gcc-c++ openssl-devel make

wget http://nodejs.org/dist/v0.6.5/node-v0.6.5.tar.gz
tar -zxf node-v0.6.5.tar.gz
cd node-v0.6.5
./configure
make
sudo make install
sudo chown -R ec2-user /usr/local
curl http://npmjs.org/install.sh | sh

yum install git

git clone git://github.com/vanjakom/JavaScriptPlayground.git
cd JavaScriptPlayground/nodejs_static_file_server

node server.js



scp  -i ~/Developer/kormartKey.pem hello.js ec2-user@ec2-23-22-150-152.compute-1.amazonaws.com:/home/ec2-user 
