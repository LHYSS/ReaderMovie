// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content1={
      date:"Sep 02 2017",
      title:"一场秋雨一场凉",
      post_img:"/images/post-image/1.jpg",
      content:"等到秋风起，秋叶落成堆，能陪你一起枯萎也无悔。",
      view_num:"125",
      view_img:"/images/icon/see.png",
      collect_num:'93',
      collect_img:"/images/icon/love.png",
      author_img:"/images/author/1.jpg",
    };
    this.setData(post_content1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})