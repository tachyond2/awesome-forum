data = { catergories: [ { id: 'c1', name: 'frontend', forums: ['f1'] } ],
forums: [ { id: 'f1', name: 'vue', categoryId: 'c1', threads: ['t1'] // include
the key of threads } ], users: [ { id: 'u1', name: 'venture' } ], threads: [ {
id: 't1', title: '', publishedAt: 123899, userId: '', posts: ['p1'] } ], posts:
[ { id: 'p1', publishedAt: 12312421, text: 'i like', userId: '', threadId: 't1'
} ] }

data.posts.filter(post => post.userId === 'u1') data.threads.filer(thread =>
thread.userId === 'u1')

const thread1 = data.threads.find(t => t.id === 't1') const thread1Posts =
data.posts.filter(p => p.threadId === thread1.id)
