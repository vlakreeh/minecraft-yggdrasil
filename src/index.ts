import generateUniqueId from 'uuid'
import { v4 } from 'uuid/interfaces'
import axios, { AxiosProxyConfig } from 'axios'

export type Agent = {
    name: string
    version: number
}

export type AuthenticationOptions = {
    agent?: Agent,
    username: string,
    password: string,
    clientToken?: v4,
    requestUser?: boolean,
}

export type AuthenticationResponse = {
    accessToken: string,
    clientToken: string
}

export type ValidationOptions = {
    accessToken: string,
    clientToken: string
}

export function authenticate(options: AuthenticationOptions, proxy?: AxiosProxyConfig | undefined): Promise<AuthenticationResponse> {
    return new Promise<AuthenticationResponse>((resolve, reject) => {
        axios({
            method: 'post',
            url: 'http://authserver.mojang.com/authenticate',
            proxy: proxy,
            data: options
        }).then(response => response.data as AuthenticationResponse).then(resolve).catch(reject)
    })
}

export function validate(options: ValidationOptions, proxy?: AxiosProxyConfig | undefined): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        axios({
            method: 'post',
            url: 'http://authserver.mojang.com/validate',
            proxy: proxy,
            data: options
        }).then(() => resolve(true)).catch(() => resolve(false))
    })
}