FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/sg-app.jar /sg-app/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/sg-app/app.jar"]
