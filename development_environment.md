# Setting Up a Development Environment for VueJS

## 1. Installing NVM (Node Version Manager)

### 1.1 Windows (using nvm-windows)
1.1.1. **Download nvm-windows**: Go to the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases) and download the latest `nvm-setup.zip`.
1.1.2. **Install nvm-windows**:
   - Extract the `nvm-setup.zip` file.
   - Run the `nvm-setup.exe` file and follow the installation instructions.

### 1.2 macOS (using Homebrew)
1.2.1. **Install Homebrew** (if not already installed):
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
1.2.2. **Install NVM**:
   ```sh
   brew install nvm
   ```
1.2.3. **Set up NVM directories**:
   ```sh
   mkdir ~/.nvm
   ```
1.2.4. **Add NVM to your shell profile** (`~/.zshrc` or `~/.bash_profile`):
   ```sh
    export NVM_DIR="$HOME/.nvm"
    [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
    [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
   ```
1.2.5. **Reload your shell profile**:
   ```sh
   source ~/.zshrc  # or source ~/.bash_profile
   ```

### 1.3 Linux
1.3.1. **Install NVM**:
   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   ```
1.3.2. **Add NVM to your shell profile** (`~/.bashrc`, `~/.zshrc`, or `~/.profile`):
   ```sh
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   ```
1.3.3. **Reload your shell profile**:
   ```sh
   source ~/.bashrc  # or source ~/.zshrc or source ~/.profile
   ```

## 2. Using NVM to Install Node 18

2.1. **Install Node.js version 18**:
   ```sh
   nvm install 18
   ```
2.2. **Use Node.js version 18**:
   ```sh
   nvm use 18
   ```
2.3. **Set Node.js version 18 as default**:
   ```sh
   nvm alias default 18
   ```
