module.exports = {
    chainWebpack:config => config.optimization.minimize(false), //개발도구 IDE에서 디버깅해야 하는 경우가 생겨 js 파일의 경우는 Uglify false로 수정
    publicPath: './',
    "transpileDependencies": [
        "vuetify"
    ],
};
