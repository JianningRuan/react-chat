let unit = {
    getRedirectPath(userData){
        console.log('检查', userData);
        let url = userData.type === 'boss'? '/boss': '/genius';
        // 因为在补充信息页中，一定要填上所有数据才能保存。所有此处只需判断头像是否存在即可
        if (!userData.headPic){
            url += 'Info';
        }
        return url
    },

    handleChange(_this, key, val){ // this
        _this.setState({
            [key]: val
        })
    }
};

export default unit;