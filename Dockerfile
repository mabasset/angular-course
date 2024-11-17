# choose base image
FROM		debian:bookworm

# define build arguments
ARG			UID GID NAME PSW DIR

# update base image dependencies and install new ones
RUN			apt update \
			&& apt install -qy \
				curl \
				sudo

# create cadmos group
RUN			groupadd -g ${GID} cadmos

# create new user (m: create home dir. d: default login dir. s: default tty. u: specify UID. g: specify GID. G: list of supplementary groups.)
RUN			useradd -m -d /home/${NAME} -s /bin/bash -u ${UID} -g ${GID} -G sudo ${NAME}

# set up a password
RUN			echo ${NAME}:${PSW} | chpasswd

# log into the new account
USER		${NAME}

# install nvm (node version manager) (- stands for stdout)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
    && nvm install 22 \
    && npm install -g -f @angular/cli --verbose

# change current directory
WORKDIR		${DIR}


ENTRYPOINT	[ "/bin/bash", "-c" ]
CMD			[ "bash" ]