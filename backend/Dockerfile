FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the contents of the backend directory into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r /app/requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define the command to run your Flask application
CMD ["python3", "app.py"]