# This file is used to create the image for our application
# Recall that an image is like a blueprint for the series of processes we want our container to run
# We want this to be able to be reliably run anywhere so the first thing we provide is a starting point for the
# container
FROM amazoncorretto:17

# Now we'll want to copy our packaged application once it's built up and then actually run the app here
# The application jar (its executable file) will be stored in the target folder, we want to copy it to the container's
# storage so we can directly run it
COPY target/app.jar app.jar

# Now one other thing we need to consider before running our app is exposing ports on the container
EXPOSE 8080

# The final thing we need to do is actually run our application
# To run a jar file we use "java -jar app.jar"
CMD ["java", "-jar", "app.jar"]