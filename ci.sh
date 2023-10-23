#!/bin/bash

case $1 in
"install")
    echo "Installing Rustup..."
    # Install Rustup (compiler)
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    echo "Adding Rust binaries to path"
    source "$HOME/.cargo/env"

    echo "Installing wasm-pack..."
    # Install wasm-pack
    curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -y

    echo "Installing dependencies..."
    pnpm i
    ;;

"build")
    echo "Adding Rust binaries to path"
    source "$HOME/.cargo/env"

    echo "Building WebAssembly module..."
    pnpm build:wasm

    echo "Building web app..."
    pnpm build
    ;;
esac
