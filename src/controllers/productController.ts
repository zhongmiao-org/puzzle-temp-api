/**
 * 产品控制器
 * 处理产品相关的API请求
 */

import { Controller, Get, Param, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import { products, Product } from '../data/products';
import { sendSuccess, sendError, asyncHandler } from '../utils/responseUtils';
import { ErrorCode } from '../utils/errorCodes';

@Controller('/products')
export class ProductController {
  /**
   * 获取所有产品
   * @param req 请求对象
   * @param res 响应对象
   */
  @Get('/')
  getProducts(@Req() req: Request, @Res() res: Response): Response {
    // 返回所有产品数据
    return sendSuccess(
      res,
      products,
      '获取产品列表成功',
      products.length
    );
  }

  /**
   * 根据ID获取单个产品
   * @param id 产品ID
   * @param res 响应对象
   */
  @Get('/:id')
  getProductById(@Param('id') id: number, @Res() res: Response): Response {
    // 查找指定ID的产品
    const product = products.find((product: Product) => product.id === id);

    // 如果产品不存在，返回404错误
    if (!product) {
      return sendError(
        res,
        ErrorCode.PRODUCT_NOT_FOUND,
        `未找到ID为${id}的产品`
      );
    }

    // 返回找到的产品数据
    return sendSuccess(
      res,
      product,
      '获取产品成功'
    );
  }
}
