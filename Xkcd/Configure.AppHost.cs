[assembly: HostingStartup(typeof(Xkcd.AppHost))]

namespace Xkcd;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("Xkcd", typeof(MyServices).Assembly) {}

    public override void Configure(Funq.Container container)
    {
    }
}

public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}
