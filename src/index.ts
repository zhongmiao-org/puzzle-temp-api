/**
 * 主入口文件
 * 设置并启动Express服务器
 */

import 'reflect-metadata'; // 必须在顶部导入
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/userController';
import { ProductController } from './controllers/productController';
import { AreaChartController } from './controllers/area-chart-controller';
import { BarAndLineController } from './controllers/bar-and-line-controller';
import { MaleHeightWeightController } from './controllers/male-height-weight-controller';
import { FemaleHeightWeightController } from './controllers/female-height-weight-controller';
import { CandlestickAndOhlcController } from './controllers/candlestick-and-ohlc-controller';
import { HeatmapController } from './controllers/heatmap-controller';
import { HistogramController } from './controllers/histogram-controller';
import { DoubleGroupController } from './controllers/double-group-controller';
import { RangeAreaController } from './controllers/range-area-controller';
import { RangeBarController } from './controllers/range-bar-controller';
import { WaterfallController } from './controllers/waterfall-controller';
import { SunburstController } from './controllers/sunburst-controller';
import { TreemapController } from './controllers/treemap-controller';
import { DataSourceController } from './controllers/data-source-controller';
import { PieChartController } from './controllers/pie-chart-controller';
import { DonutChartController } from './controllers/donut-chart-controller';
import { BoxPlotController } from './controllers/box-plot-controller';
import { RadarAreaController } from './controllers/radar-area-controller';
import { FunnelController } from './controllers/funnel-controller';
import { ConeFunnelController } from './controllers/cone-funnel-controller';
import { SankeyController } from './controllers/sankey-controller';
import { RadialBarController } from './controllers/radial-bar-controller';
import { RadarLineController } from './controllers/radar-line-controller';
import { ChordController } from './controllers/chord-controller';
import { sendError } from './utils/responseUtils';
import { ErrorCode } from './utils/errorCodes';

// 创建Express应用实例
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(helmet()); // 添加安全相关的HTTP头
app.use(cors()); // 启用CORS支持跨域请求
app.use(express.json()); // 支持JSON请求体解析


// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: '服务运行正常' });
});

// 使用routing-controllers配置路由
useExpressServer(app, {
  routePrefix: '/api',
  controllers: [
    UserController,
    ProductController,
    // 图表数据控制器
    AreaChartController,
    BarAndLineController,
    MaleHeightWeightController,
    FemaleHeightWeightController,
    CandlestickAndOhlcController,
    HeatmapController,
    HistogramController,
    DoubleGroupController,
    RangeAreaController,
    RangeBarController,
    WaterfallController,
    SunburstController,
    TreemapController,
    DataSourceController,
    PieChartController,
    DonutChartController,
    BoxPlotController,
    RadarAreaController,
    FunnelController,
    ConeFunnelController,
    SankeyController,
    RadialBarController,
    RadarLineController,
    ChordController
  ],
  defaultErrorHandler: false
});

// 全局错误处理中间件
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Global error handler:', err);
  return sendError(
    res,
    ErrorCode.UNKNOWN_ERROR,
    err.message || '服务器发生未知错误'
  );
});

// 处理404错误
app.use((req: Request, res: Response) => {
  return sendError(
    res,
    ErrorCode.NOT_FOUND,
    `找不到路径: ${req.originalUrl}`
  );
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动，监听端口: ${PORT}`);
});

export default app;
