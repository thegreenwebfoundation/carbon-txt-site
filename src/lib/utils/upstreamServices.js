export default [
    {
        name: 'Shared hosting for websites',
        slug: 'shared-hosting',
        category: 'compute',
        description: `<p>Shared hosting for websites is the kind of entry level hosting you might get where you pay between 1-20 EUR or USD per month, in return for the ability to run a websites on a shared server. You typically manage them through a control panel like cpanel, and in some cases you can run a database like MySQL for dynamic sites..</p>`
    },
    {
        name: 'Virtual private servers',
        slug: 'vps',
        category: 'compute',
        description: `<p>Virtual private servers are virtual machines where a set amount of resources like hard drive space, memory or CPU capacity are allocated to you, from a larger physical machine. You often are free to install your choice of operating system. You usually have more control than with shared hosting, in exchange for having to manage more of the complexity yourself.</p>`
    },
    {
        name: 'Physical servers',
        slug: 'physical-servers',
        category: 'compute',
        description: `<p>With physical servers, you rent a physical machine, and have all of its resources dedicated to you. All the RAM, the network capacity and any computing power is yours, and is not shared with any other customers. In return, you are not shielded from the complexities of working with hardware, like when a disk drive fails and so on.</p>`
    },
    {
        name: 'Colocation services',
        slug: 'colocation',
        category: 'compute',
        description: `<p>Finally, if you already have your own servers, rather than paying for compute power from servers that someone else owns, you pay might for use of a building to put them in instead. Someone else keeps your servers stored securely, and supplied with power, and connectivity, but you are responsible for sourcing all your hardware.</p>`
    },
    {
        name: 'Block storage',
        slug: 'block-storage',
        category: 'storage',
        description: `<p>The simplest way to think about block storage is to think about having a virtual disk, where you pay for a certain amount of storage capacity, then treat like a regular disk, opening and saving files and writing them to a file system.</p>
        <p>In both cases, when you save a file, you don’t directly write a file to disk – you write it to a block device, which itself takes care of writing to the disk. When you pay for a block storage service, you effectively get a disk that can be scaled to precisely the right size you need for your use case, can be attached to any computer in the same datacentre. Also, your data is usually protected from individual hardware failures – so if a physical disk fails, your programs can still function.</p>`
    },
    {
        name: 'Object storage',
        slug: 'object-storage',
        category: 'storage',
        description: `<p>The second form of storage is object storage. Here, most of the time, rather than knowing ahead of time how much storage you need and paying to have a disk large enough to hold everything you need, you upload files without needing to specify in advance how much space you need, and just pay for the storage it takes up.</p>
        <p>Like the block storage service, you are shielded from hardware failures, and it’s often much cheaper than other forms of storage. The downside however is that you aren’t really using a file system like you are on a laptop with folders and so on, so software needs to be specially written to use this kind of storage.</p>`
    },
    {
        name: 'Content Delivery Networks',
        slug: 'cdn',
        category: 'network',
        description: `<p>Content delivery networks take copies of files, and copy them to multiple servers around the world, to make them more available to users. This might make it faster to download content, or mean that a site can stay up, even if the original server goes down.</p>`
    },
    {
        name: 'Platform-as-a-Service',
        slug: 'paas',
        category: 'managed-service',
        description: `<p>We use the term “Platform as a service” to refer to services that help you manage the life cycle of software, so you can focus on just the parts that are unique to your website or application. These tend to help you manage things like regular backups of important data, releasing new versions of an application to customers, tracking performance and so on, or scaling the amount of computing power to respond to traffic.</p>
        <p>In this field it's increasingly common to see providers who manage installations of large, open source projects like Kubernetes on your behalf – they take care of the platform, and you take care of the software for a specific application.</p>`
    },
    {
        name: 'Managed WordPress Hosting',
        slug: 'wordpress-hosting',
        category: 'managed-service',
        description: `<p>You can think of Managed WordPress hosting as a more focussed offering to “Platform-as-a-service”. You pay to have a WordPress instance run for you, and backups of data to be handled, and you are not responsible for maintaining it yourself, but still benefit from being able to use a well known open source content management system for publishing online. If it helps you can think of this as “WordPress as a service” – you pay for someone else to provide a managed WordPress that you use to reach users.</p>`
    },
]