using System.Web;
using System.Web.Optimization;

namespace SGL
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.min.js",
                      "~/Scripts/angular-route.min.js",
                      "~/Scripts/angular-sanitize.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/Site/myApp.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/layout/css").Include(
                "~/Content/Layout/skel-noscript.css",
                "~/Content/Layout/style.css",
                "~/Content/Layout/style-desktop.css"
                )) ;
            bundles.Add(new ScriptBundle("~/bundles/app/layout").Include(
                "~/Scripts/Site/Layout/skel.min.js",
                "~/Scripts/Site/Layout/skel-panels.min.js",
                "~/Scripts/Site/Layout/init.js"
                ));
        }
    }
}
