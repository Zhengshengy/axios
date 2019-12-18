import { callAPI,HTTP_VERBS } from '@/servers/http';
import PersonalServer from '@/servers/server/Personal'
import UserServer from '@/servers/server/User'
import SubWebsiteServer from '@/servers/server/subwebsite'
import cartServer from '@/servers/server/shoppingcart'
const indexService = {
    //轮播图
    Rotation_chart(){
        return callAPI('home/rotation_chart', HTTP_VERBS.get);
    },
    //广告
    Advert(data){
        return callAPI('home/advert', HTTP_VERBS.get, { ...data });
    },
    //快报
    Mall_express(){
        return callAPI('home/mall_express', HTTP_VERBS.get);
    },
    //推荐商品
    Goods(data) {
        return callAPI('home/goods', HTTP_VERBS.post, { ...data });
    },
    //首页导航
    Test(){
        return callAPI('home/test', HTTP_VERBS.get);
    },
    //首页分类
    Classification(){
        return callAPI('home/classification', HTTP_VERBS.get);
    },
    //推荐商铺
    Shops(){
        return callAPI('home/shops',HTTP_VERBS.get)
    },
    //热门品牌
    Brand(){
        return callAPI('home/brand',HTTP_VERBS.get)
    },
    //今日推荐
    Today_goods(){
        return callAPI('home/today_goods',HTTP_VERBS.get)
    },
    //今日店铺推荐
    Today_shops(){
        return callAPI('home/today_shops',HTTP_VERBS.get)
    },
    //今日特价推荐
    Tpecial_goods(){
        return callAPI('home/special_goods',HTTP_VERBS.get)
    },
    //建材资讯
    Information(){
        return callAPI('home/information',HTTP_VERBS.get)
    },
    //今日现货分类
    Spot_classification(data){
        return callAPI('detail/spot_classification',HTTP_VERBS.get,{ ...data })
    },
    //今日现货
    Spot_today(data){
        return callAPI('detail/spot_today',HTTP_VERBS.get,{ ...data })
    },
    //特价商品
    Specials(data){
        return callAPI('detail/specials',HTTP_VERBS.get,{ ...data })
    },
    //推荐商铺
    Recommend_shops(data){
        return callAPI('detail/recommend_shops',HTTP_VERBS.get,{ ...data })
    },
    //随手拍
    Conveniently(data){
        return callAPI('detail/conveniently',HTTP_VERBS.get,{ ...data })
    },
    //价格表
    PriceList(data){
        return callAPI('detail/priceList',HTTP_VERBS.get,{ ...data })
    },
    //物流信息
    Logistics_information(data){
        return callAPI('detail/logistics_information',HTTP_VERBS.get,{ ...data })
    },
    //最新需求
    Demand(data){
        return callAPI('detail/demand',HTTP_VERBS.get,{ ...data })
    },
    //出租转让
    Lease(data){
        return callAPI('detail/lease',HTTP_VERBS.get,{ ...data })
    },
    //建材市场
    Building_material(data){
        return callAPI('detail/building_material',HTTP_VERBS.get,{ ...data })
    },
    //建材资讯(多条)
    Information_many(data){
        return callAPI('detail/information_many',HTTP_VERBS.get,{ ...data })
    },
    //热门商铺
    Heat_shops(){
        return callAPI('section/heat_shops',HTTP_VERBS.get)
    },
    //热门资讯
    Heat_article(){
        return callAPI('section/heat_article',HTTP_VERBS.get)
    },
    //热门资讯(当前的数据)
    Details_article(data){
        return callAPI('section/details_article',HTTP_VERBS.post,{ ...data })
    },
    //热门资讯(上一条数据)
    Upper_article(data){
        return callAPI('section/upper_article',HTTP_VERBS.post,{ ...data })
    },
    //热门资讯(下一条数据)
    Lower_article(data){
        return callAPI('section/lower_article',HTTP_VERBS.post,{ ...data })
    },
    //热门的资讯(相关)
    Relevant_article(){
        return callAPI('section/relevant_article',HTTP_VERBS.get)
    },
    //今日现货(上一条数据)
    Upper_goods(data){
        return callAPI('section/upper_goods',HTTP_VERBS.post,{ ...data })
    },
    //今日现货(下一条数据)
    Lower_goods(data){
        return callAPI('section/lower_goods',HTTP_VERBS.post,{ ...data })
    },
    //今日现货(当前的数据)
    Details_goods(data){
        return callAPI('section/details_goods',HTTP_VERBS.post,{ ...data })
    },
    //今日现货(更多)
    Relevant_goods(){
        return callAPI('section/relevant_goods',HTTP_VERBS.post)
    },
    //今日现货(推荐)
    Recommend_goods(){
        return callAPI('section/recommend_goods',HTTP_VERBS.get)
    },
    //物流信息(当前的数据)
    Details_logistics(data){
        return callAPI('section/details_logistics',HTTP_VERBS.post,{ ...data })
    },
    //物流信息(上一条数据)
    Upper_logistics(data){
        return callAPI('section/upper_logistics',HTTP_VERBS.post,{ ...data })
    },
    //物流信息(下一条数据)
    Lower_logistics(data){
        return callAPI('section/lower_logistics',HTTP_VERBS.post,{ ...data })
    },
    //推荐物流的公司
    Recommend_logistics(){
        return callAPI('section/recommend_logistics',HTTP_VERBS.get)
    },
    //物流的公司(相关)
    Relevant_logistics(){
        return callAPI('section/relevant_logistics',HTTP_VERBS.get)
    },
    //求购信息(当前的数据)
    Details_requirement(data){
        return callAPI('detail/details_requirement',HTTP_VERBS.post,{ ...data })
    },
    //求购信息(上一条数据)
    Upper_requirement(data){
        return callAPI('detail/upper_requirement',HTTP_VERBS.post,{ ...data })
    },
    //求购信息(下一条数据)
    Lower_requirement(data){
        return callAPI('detail/lower_requirement',HTTP_VERBS.post,{ ...data })
    },
    //求购信息(更多)
    More_requirement(){
        return callAPI('detail/more_requirement',HTTP_VERBS.get)
    },
    //分类的商品的信息
    Product_commodity(data){
        return callAPI('detail/product_commodity',HTTP_VERBS.post,{ ...data })
    },
    //商铺的搜索
    Shops_search(data){
        return callAPI('detail/shops_search',HTTP_VERBS.post,{ ...data })
    },
    //全网询价
    Inquiry(data,options){
        return callAPI('detail/inquiry',HTTP_VERBS.post,data,options)
    },
};
export default {
    indexService,
    PersonalServer,
    UserServer,
    SubWebsiteServer,
    cartServer
}
