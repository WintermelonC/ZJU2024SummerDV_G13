# ZJU 2024年夏学期大数据可视化 可视分析系统设计 Group13
# 使用到的包
- react etc.
- eslint etc.
- echarts etc.
- material UI etc.
- papaparse
# 使用方法
在本地文件夹下依次运行：`npm install`  `npm start`
# 小组成员注意事项
在 pull 到本地仓库后进行修改时，请先新建一个分支并合理命名，不要直接在 main 分支上提交节点。修改完后 push 到远程仓库，等待管理员确认。
# 策划
## 变量规定
(BarChartType) A变量：5个图表类型：A1、A2、A3、A4、A5

(ModelName) B变量：2个AI模型：VGG19、ResNet50

(SamplingTarget) C变量：高度和比率：height、ratio

(SamplingMethod) D变量：4个分割数据方法：
- D1：IID
- D2：COV
- D3：ADV
- D4：OOD

(DownSamplingLevel) E变量：4个不同数量：16、8、4、2

(RunIndex) F变量：5个运行次数：0、1、2、3、4