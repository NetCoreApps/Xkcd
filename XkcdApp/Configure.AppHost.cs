[assembly: HostingStartup(typeof(XkcdApp.AppHost))]

namespace XkcdApp;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("XkcdApp", typeof(MyServices).Assembly) {}

    public override void Configure(Funq.Container container)
    {
    }
}

public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}
