FROM rabbitmq:3.7-management
RUN rabbitmq-plugins enable rabbitmq_mqtt
RUN rabbitmq-plugins enable rabbitmq_web_mqtt
RUN rabbitmq-plugins enable rabbitmq_management
