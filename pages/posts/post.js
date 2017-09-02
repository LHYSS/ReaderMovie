// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:{
    collect_img: "/images/icon/love.png",
    view_img: "/images/icon/see.png",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content=[
      {
        date: "Sep 02 2017",
        title: "一场秋雨一场凉",
        content: "等到秋风起，秋叶落成堆，能陪你一起枯萎也无悔。风中有朵雨做的云，有朵雨做的云，蓝心花开在大草地，花开在大草地。",
        view_num: "125",
        collect_num: '93',
        img:{
          author_img: "/images/author/1.jpg",
          post_img: "/images/post-image/1.jpg",
          
        },
      },
      {
          date: "Sep 01 2017",
          title: "春花秋月何时了",
          content: "等到秋风起，秋叶落成堆，能陪你一起枯萎也无悔。风中有朵雨做的云，有朵雨做的云，蓝心花开在大草地，花开在大草地。",
          view_num: "253",
          collect_num: '111',
          img: {
            author_img: "/images/author/2.jpg",
            post_img: "/images/post-image/2.jpg",
          }
        },
      {
        date: "Aug 30 2017",
        title: "小楼昨夜又东风",
        content: "等到秋风起，秋叶落成堆，能陪你一起枯萎也无悔。风中有朵雨做的云，有朵雨做的云，蓝心花开在大草地，花开在大草地。",
        view_num: "323",
        collect_num: '91',
        img: {
          author_img: "/images/author/3.jpg",
          post_img: "/images/post-image/3.jpg",
        }
      },
      {
        date: "Aug 21 2017",
        title: "又见一帘幽梦",
        content: "等到秋风起，秋叶落成堆，能陪你一起枯萎也无悔。风中有朵雨做的云，有朵雨做的云，蓝心花开在大草地，花开在大草地。",
        view_num: "499",
        collect_num: '300',
        img: {
          author_img: "/images/author/4.jpg",
          post_img: "/images/post-image/4.jpg",
        }
      },
      {
        date: "Aug 11 2017",
        title: "问君能有几多愁",
        content: "等到秋风起，秋叶落成堆，能陪你一起枯萎也无悔。风中有朵雨做的云，有朵雨做的云，蓝心花开在大草地，花开在大草地。",
        view_num: "239",
        collect_num: '100',
        img: {
          author_img: "/images/author/5.jpg",
          post_img: "/images/post-image/5.jpg",
        }
      },
    ];
    this.setData({posts_key:posts_content});
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