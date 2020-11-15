import React from 'react';
import { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';
import { Badge } from 'antd';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */

export const getAuthorityFromRouter = (router = [], pathname) => {
  const authority = router.find(
    ({ routes, path = '/' }) =>
      (path && pathRegexp(path).exec(pathname)) ||
      (routes && getAuthorityFromRouter(routes, pathname)),
  );
  if (authority) return authority;
  return undefined;
};
export const getRouteAuthority = (path, routeData) => {
  let authorities;
  routeData.forEach(route => {
    // match prefix
    if (pathRegexp(`${route.path}/(.*)`).test(`${path}/`)) {
      if (route.authority) {
        authorities = route.authority;
      } // exact match

      if (route.path === path) {
        authorities = route.authority || authorities;
      } // get children authority recursively

      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

export function pagination2Pager(pagination = {}) {
  let result;
  if (pagination.current) {
    result = {
      ...pagination,
      pageIndex: pagination.current,
    };
  } else {
    result = {
      ...pagination,
    };
  }
  return result;
}

export function pager2pagination(pager = {}) {
  if (pager.pageIndex) {
    return {
      list: pager.datas || [],
      pagination: {
        current: pager.pageIndex || 1,
        pageSize: pager.pageSize || 10,
        total: pager.totalSize || 0,
      },
    };
  }
    return {
      list: pager,
    };

}

// 处理请求URL上的参数
export function getUrlParameters(search) {
  if (search.indexOf('?') === -1) {
    return {};
  }
  const params = search.substring(search.indexOf('?') + 1).split('&');
  const urlParams = {};
  params.forEach(record => {
    const urlParameter = record.split('=');
    const [key, value] = urlParameter;
    urlParams[key] = value;
  });
  return urlParams;
}

// 处理描述种的换行
export function renderMiaoShu(text) {
  if (text) {
    const content = text.replace(/\r\n/g, '\n').split('\n');
    return content.map((tent, index) => {
      if (index > 0 && index < content.length) {
        return <span><br/>{tent}</span>;
      }
      return <span>{tent}</span>;
    });
  }
  return text;
}

// 处理描述种的换行
export function renderBadgeMiaoShu(text, pattern) {
  if (text) {
    const content = pattern ? text.split(pattern) : text.replace(/\r\n/g, '\n').split('\n');
    return content.map((tent, index) => {
      const count = index + 1;
      if (index > 0 && index < content.length) {
        return (
          <span>
            <br/>
            <Badge
              style={{backgroundColor: '#52c41a', marginRight: '3px', marginBottom: '3px'}}
              size="small"
              count={count}
            />
            {tent}
          </span>
        );
      }
      return (
        <span>
          <Badge
            style={{backgroundColor: '#52c41a', marginRight: '3px', marginBottom: '3px'}}
            size="small"
            count={count}
          />
          {tent}
        </span>
      );
    });
  }
  return text;
}
