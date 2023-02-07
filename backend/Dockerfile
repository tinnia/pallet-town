# Maven Build
FROM maven:3.8.6-jdk-8 as MAVEN_BUILD
WORKDIR /build

COPY pom.xml .
COPY ./tmp/maven-dependencies/ ./tmp/
RUN cat ./tmp/m2.tar.gz.part* > ./tmp/m2.tar.gz
RUN cp ./tmp/settings.xml ./settings.xml
RUN sh ./tmp/load.sh ./.m2
RUN rm -rf tmp

COPY src ./src

RUN --mount=type=cache,target=/root/.m2 mvn package -Dmaven.test.skip=true -s ./settings.xml



# Run
FROM openjdk:8
WORKDIR /app

ARG JAR_FILE=*.jar
COPY --from=MAVEN_BUILD /build/target/${JAR_FILE} ./app.jar

EXPOSE 8080
ENTRYPOINT exec java -jar ./app.jar
