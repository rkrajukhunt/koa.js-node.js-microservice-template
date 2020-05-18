import AuthorizationService from "../services/auth";

export default async (ctx: any, next: any): Promise<void> => {
  const { _matchedRoute: resource, method } = ctx;
  try {
    const authorizationService = new AuthorizationService();
    const authorizationResponse = await authorizationService.fetch({
      route: resource,
      method,
      token: ctx.request.get('authorization') || '',
      isNipigeAdmin: false,
      isNipigeTenant: false
    })
    ctx.userData = authorizationResponse.data
    await next();
  } catch (err) {
    if (ctx.status === 401) {
      ctx.body = {
        status: 0,
        message: err.message,
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 0,
        message: err.message,
      };
    }
  }
};
