FROM python:3.11

# Set the working directory in the container
WORKDIR /app

# Copy the contents of the backend directory into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define the command to run your Flask application
CMD ["python3", "app.py"]