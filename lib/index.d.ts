import { v4 } from 'uuid/interfaces';
import { AxiosProxyConfig } from 'axios';
export declare type Agent = {
    name: string;
    version: number;
};
export declare type AuthenticationOptions = {
    agent?: Agent;
    username: string;
    password: string;
    clientToken?: v4;
    requestUser?: boolean;
};
export declare type AuthenticationResponse = {
    accessToken: string;
    clientToken: string;
};
export declare type ValidationOptions = {
    accessToken: string;
    clientToken: string;
};
export declare function authenticate(options: AuthenticationOptions, proxy?: AxiosProxyConfig | undefined): Promise<AuthenticationResponse>;
export declare function validate(options: ValidationOptions, proxy?: AxiosProxyConfig | undefined): Promise<boolean>;
