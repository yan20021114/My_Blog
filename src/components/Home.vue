<template>
  <div class="container">
    <!-- Banner背景图 -->
    <div class="banner"></div>
    
    <!-- 顶部导航栏 -->
    <div class="header">
      <div class="logo">My Blog</div>
      <div class="nav">
        <router-link to="/blog" target="_blank">日志</router-link>
        <router-link to="/album" target="_blank">相册</router-link>
        <router-link to="/message" target="_blank">留言板</router-link>
        <router-link to="/profile" target="_blank">个人信息</router-link>
        <router-link to="/" class="logout-link">退出</router-link>
      </div>
    </div>
    
    <!-- 主体内容区 -->
    <div class="main-content">
      <!-- 左侧内容区 -->
      <div class="left-content">
        <div class="blog-list">
          <h2>数据概览</h2>
          <div class="stats-container">
            <div class="stat-item">
              <h3>博客总数</h3>
              <p class="stat-value">{{ blogCount }}</p>
            </div>
            <div class="stat-item">
              <h3>笔记数量</h3>
              <p class="stat-value">{{ noteCount }}</p>
            </div>
            <div class="stat-item">
              <h3>访客总数</h3>
              <p class="stat-value">{{ visitorCount }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧边栏 -->
      <div class="right-sidebar">
        <div class="write-blog" @click="$router.push('/blog')"> 
          <div class="blog-card-header">
            <img src="../assets/icons/detail.svg" alt="detail icon" class="blog-icon">
            <h3>博客记录</h3>
          </div>
        </div>
        <div class="visitors">
          <div class="blog-card-header">
            <img src="../assets/icons/eye.svg" alt="eyes icon" class="blog-icon">
            <h3>最近访客</h3>
          </div>
          <!-- 访客列表 -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  height: 300px;
  background-image: url("../assets/img/leaves.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  z-index: 2;
}

.nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: 500;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.nav a:hover, .logout-link:hover {
  color: #42b983;
}

.logout-link {
  margin-left: 20px;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: 500;
  color: white;
}
.main-content {
  display: flex;
  padding: 10px 0px;
  background-color: #f8f9fa;
  flex-grow: 1;
  overflow-y: auto;
}
.left-content {
  flex: 3;
  margin-right: 20px;
}
.right-sidebar {
  flex: 1;
}
.blog-list {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin-bottom: 30px;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #42b983;
  margin-top: 10px;
}

.write-blog, .visitors {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.blog-card-header h3 {
  font-size: 24px;
}

.blog-icon {
  width: 40px;
  height: 40px;
}

.write-blog:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.blog-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.blog-textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.blog-submit {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.blog-submit:hover {
  background-color: #3aa876;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
}
</style>