Requirements
    
    raspberry pi version 2 or 3 with running raspian jessie
    LAN or WLAN access

Modifier l'interface : 
    
    nano ~/.bashrc
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;31m\]\u@\h\[\033[00m\]:\[\033[00;33m\]\w \$\[\033[00m\] '
    sudo apt-get update && sudo apt-get upgrade -y

Install prerequisites : 

    sudo apt-get install ntp
    sudo systemctl start ntp
    sudo systemctl status ntp
    sudo nano /etc/ntp.conf
        modifier les lignes "servers"ou "pool"
            pool 0.fr.pool.ntp.org iburst dynamic
            pool 1.fr.pool.ntp.org iburst dynamic
            pool 2.fr.pool.ntp.org iburst dynamic
            pool 3.fr.pool.ntp.org iburst dynamic
    sudo systemctl restart ntp
    sudo nano /etc/network/interfaces
        Cherchez wlan0 et ajoutez, en-dessous, la ligne suivante :
            wireless-power off
 
Install npm & nodejs :
   
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo npm install npm@latest -g

Install docker on raspberry : 
    
    curl -sSL https://get.docker.com | sh
    sudo systemctl enable docker
    sudo systemctl start docker
    sudo systemctl stop docker
    sudo usermod -aG docker pi
    sudo reboot
    
Setup docker-compose
    
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py 
    sudo python3 get-pip.py
    sudo pip3 install docker-compose

    cd ~/
    git clone https://github.com/jer-em/mymagicmirror.git

Installer les modules du mirroir :

    cd mymagicmirror/
    git clone https://github.com/jclarke0000/MMM-DarkSkyForecast.git
    sudo npm install
    
    git clone https://github.com/RichieCZ/MMM-NameDay.git
    sudo npm install
    
    git clone https://github.com/edward-shen/MMM-page-indicator.git
    sudo npm install
    
    git clone https://github.com/edward-shen/MMM-pages.git
    sudo npm install
    
    git clone https://github.com/bugsounet/MMM-AirParif.git
    sudo npm install
    
    git clone https://github.com/Wanztwurst/MMM-portscan.git
    sudo npm install
    
    git clone https://github.com/sheyabernstein/MMM-connection-status.git
    sudo npm install
    
    git clone https://github.com/AgP42/MMM-SmartWebDisplay.git
    sudo npm install
     
    cd ~/mymagicmirror/modules/MMM-network-signal
    sudo npm install ping
    sudo npm install

Télécharger le docker MagicMirror : 
 
    docker run  -d \
    --publish 8080:8080 \
    --restart always \
    --volume ~/mymagicmirror/config:/opt/magic_mirror/config \
    --volume ~/mymagicmirror/modules:/opt/magic_mirror/modules \
    --volume /etc/localtime:/etc/localtime:ro \
    --name magic_mirror \
    bastilimbach/docker-magicmirror

Télécharger le docker Portenair : 
   
    docker volume create portainer_data
    docker run -d \
    -p 8081:8000 \
    -p 9000:9000 \
    --name=portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer
