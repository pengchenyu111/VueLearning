export default {
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(types.UPDATE_INFO)
        console.log(payload);
        resolve('ok')
      }, 1000)
    })

  }
}
