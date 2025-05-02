<template>
  <div class="profile-container">
    <div class="profile-header">
      <h2>个人信息</h2>
    </div>
    
    <div class="profile-content">
      <div class="avatar-section">
        <img src="../assets/img/avatar.jpg" alt="用户头像" class="avatar">
      </div>
      
      <div class="info-section">
        <div class="info-item">
          <span class="label">用户名：</span>
          <span class="value" v-if="!isEditing">{{ userInfo.username }}</span>
          <input v-else v-model="userInfo.username" class="edit-input">
        </div>
        <div class="info-item">
          <span class="label">注册时间：</span>
          <span class="value">{{ userInfo.registerDate }}</span>
        </div>
        <div class="info-item">
          <span class="label">个人简介：</span>
          <span class="value" v-if="!isEditing">{{ userInfo.bio }}</span>
          <textarea v-else v-model="userInfo.bio" class="edit-textarea"></textarea>
        </div>
        <div class="button-group">
          <button v-if="isEditing" class="save-btn" @click="saveProfile">保存</button>
          <button class="edit-btn" @click="toggleEdit">{{ isEditing ? '取消' : '编辑' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      isEditing: false,
      userInfo: {
        username: 'MyBlogUser',
        registerDate: '2023-01-01',
        bio: '热爱编程与分享'
      }
    }
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing
    },
    saveProfile() {
      // 这里可以添加保存逻辑，比如调用API
      this.isEditing = false
      alert('个人信息已保存！')
    }
  }
}
</script>

<style scoped>
.profile-container {
  padding: 20px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f8f9fa;
  overflow: hidden;
  box-sizing: border-box;
}

.profile-header {
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.profile-content {
  display: flex;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  max-width: 100%;
  overflow-x: hidden;
}

.avatar-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b983;
}

.info-section {
  flex: 2;
}

.info-item {
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.label {
  font-weight: bold;
  margin-right: 10px;
  min-width: 80px;
}

.edit-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.save-btn {
  padding: 8px 16px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.edit-btn:hover {
  background-color: #3aa876;
}

.save-btn:hover {
  background-color: #ff5252;
}

.button-group {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.edit-input, .edit-textarea {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.edit-textarea {
  min-height: 100px;
  resize: vertical;
}
</style>