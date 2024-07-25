import sys
from time import sleep

print("Python process started", flush=True)  # Notify Node.js that Python has started

while True:
    # Read input from Node.js
    print(f"Received from Node.js", flush=True)  # Send response back to Node.js
    sys.stdout.flush()

    # For demonstration, send a reply back
    sys.stdout.write(f"Hello from Python: {'test'}\n")
    sys.stdout.flush()

    sleep(3)