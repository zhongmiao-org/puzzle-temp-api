/**
 * API路由配置文件
 *
 * 注意：此文件已不再使用
 * 路由现在通过控制器中的装饰器（@Controller, @Get）自动配置
 * 请参考 userController.ts 和 productController.ts 中的装饰器定义
 */

// 此文件保留用于参考，但不再导出任何路由
// 路由现在由 routing-controllers 库自动处理

/*
// 旧的路由配置方式（已弃用）:
import { Router } from 'express';
import { getUsers, getUserById } from './controllers/userController';
import { getProducts, getProductById } from './controllers/productController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

export { router };
*/

// 导出一个空对象，以防止导入此文件时出错
export const router = {};
