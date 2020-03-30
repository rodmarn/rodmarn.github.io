const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	{
        name: 'I Could Be the One',
        artist: 'Donna Lewis',
        url: 'http://music.163.com/song/media/outer/url?id=19724606.mp3',
        cover: '/images/2.jpg',
      },
	{
        name: '没有意外',
        artist: '蔡徐坤',
        url: 'http://music.163.com/song/media/outer/url?id=1346079558.mp3',
        cover: '/images/8.jpg',
      },
	   {
        name: 'Reset',
        artist: 'Tiger JK / Jinsil',
        url: 'http://music.163.com/song/media/outer/url?id=33684399.mp3',
        cover: '/images/1.jpg',
      },
	  {
        name: '成全',
        artist: '林宥嘉',
        url: 'http://music.163.com/song/media/outer/url?id=562594267.mp3',
        cover: '/images/3.jpg',
      },
	  {
        name: '水星记',
        artist: '郭顶',
        url: 'http://music.163.com/song/media/outer/url?id=441491828.mp3',
        cover: '/images/4.jpg',
      }	
    ]
});