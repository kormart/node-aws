node-aws
========

## Github tips
How to do README-file
https://help.github.com/articles/github-flavored-markdown

## How to do node.js on AWS EC2
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

Then if you want to do something with git

    yum install git

    git clone git://github.com/vanjakom/JavaScriptPlayground.git
    cd JavaScriptPlayground/nodejs_static_file_server

    node server.js

Uploading files to ec2

    scp  -i ~/Developer/myKey.pem hello.js ec2-user@ec2-XX-XX-XXX-XXX.compute-1.amazonaws.com:/home/ec2-user 

## Express and Jade

    npm install express
    npm install jade
    
The server_mod.js file is an express/jade server. In the views folder, there is index.jade, that uses jQuery Mobile to render a 2-page web.
