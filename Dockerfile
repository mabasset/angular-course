FROM		ubuntu

ARG			UID GID NAME PSW

RUN			apt update \
			&& apt install -qqy \
				nodejs \
				npm \
				sudo

RUN			npm install -g @angular/cli

RUN			useradd -u ${UID} -m ${NAME} \
				&& echo ${NAME}:${PSW} | chpasswd \
				&& usermod -a -G sudo ${NAME}

WORKDIR		/homes-app/

USER		${NAME}

ENTRYPOINT	[ "/bin/bash", "-c" ]
CMD			[ "bash" ]
