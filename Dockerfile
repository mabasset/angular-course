FROM		node:lts

ARG			NAME PSW DIR

RUN			apt update \
			&& apt install -qy \
				sudo

RUN			npm install -g @angular/cli

# create cadmos group
RUN			groupadd cadmos
# create new user (m: create home dir. d: default login dir. s: default tty. G: list of supplementary groups.)
RUN			useradd -m -d /home/${NAME} -s /bin/bash -G cadmos,sudo ${NAME}
# set up a password
RUN			echo ${NAME}:${PSW} | chpasswd

WORKDIR		${DIR}

USER		${NAME}

ENTRYPOINT	[ "/bin/bash", "-c" ]
CMD			[ "bash" ]
