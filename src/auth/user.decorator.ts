import {createRouteParamDecorator} from '@nestjs/common';

export const  User = createRouteParamDecorator((data, req) => {
    return req.user;
});