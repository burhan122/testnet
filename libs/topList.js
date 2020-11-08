publish({
  currentUser:{
    getRefLink: getRefLink,
    track: track,
    refList:{
      get: getRefList,
      clear: clearRefList
    },
    attractedByUser: attractedByUser,
    attractedByChannel: attractedByChannel
  },
  topList:{
    get: getTopList,
    clear: clearTopList
  }
})
