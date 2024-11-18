# choose base image
FROM		node:22

# define build arguments
ARG			UID GID NAME PSW DIR

# update base image dependencies and install new ones
RUN			apt update \
			&& apt install -qy \
				sudo

# install nvm (node version manager) (- stands for stdout)
RUN         npm install -g -f @angular/cli --verbose

# delete node user
RUN         userdel node

# create cadmos group
RUN			groupadd -g ${GID} cadmos

# create new user (m: create home dir. d: default login dir. s: default tty. u: specify UID. g: specify GID. G: list of supplementary groups.)
RUN			useradd -m -d /home/${NAME} -s /bin/bash -u ${UID} -g ${GID} -G sudo ${NAME}

# set up a password
RUN			echo ${NAME}:${PSW} | chpasswd

# log into the new account
USER		${NAME}

# change current directory
WORKDIR		${DIR}


ENTRYPOINT	[ "/bin/bash", "-c" ]
CMD			[ "bash" ]