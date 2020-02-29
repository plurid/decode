<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/decode/master/about/identity/decode-logo.png" height="200px">
</p>



<p align="center">
    <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?colorB=000000&style=for-the-badge" alt="Version">
    <a href="https://github.com/plurid/decode/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=000000&style=for-the-badge" alt="License">
    </a>
</p>



<h1 align="center">
    decode
</h1>

[Plurid](https://github.com/plurid/plurid)-based code editor



+ [Install](#install)
+ [Build](#build)



## Install

Download system-specific application from [decode.plurid.com/install](https://decode.plurid.com/install).



## Screenshots



## Build

In the Terminal application, clone the repository

    git clone https://github.com/plurid/decode.git

change the directory

    cd packages/decode-app/

install the dependencies

    yarn install

run the build process to aggregate the files from `./source/` to `./build/`

    yarn build

or

    yarn develop

run the electron build process

    yarn electron


For a continuous build process

    yarn watch


To package the application run the command specific to the operating system

    yarn electron.linux
    yarn electron.mac
    yarn electron.windows
