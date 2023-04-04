/* Options:
Date: 2023-04-04 05:19:34
Version: 6.80
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://ssg-examples.netcore.io

//GlobalNamespace: 
//MakePartial: True
//MakeVirtual: True
//MakeInternal: False
//MakeDataContractsExtensible: False
//AddNullableAnnotations: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: False
//AddGeneratedCodeAttributes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//InitializeCollections: True
//ExportValueTypes: False
//IncludeTypes: 
//ExcludeTypes: 
//AddNamespaces: 
//AddDefaultXmlNamespace: http://schemas.servicestack.net/types
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ExampleDataApis.ServiceModel;

namespace ExampleDataApis.ServiceModel
{
    [Route("/hello")]
    [Route("/hello/{Name}")]
    public partial class Hello
        : IReturn<HelloResponse>
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloResponse
    {
        public virtual string Result { get; set; }
    }

    [Route("/xkcd")]
    public partial class QueryXkcdComics
        : QueryDb<XkcdComic>, IReturn<QueryResponse<XkcdComic>>
    {
        public virtual int[] Ids { get; set; }
    }

    public partial class XkcdComic
    {
        public virtual int Id { get; set; }
        public virtual string Title { get; set; }
        public virtual string ImageTitle { get; set; }
        public virtual string Url { get; set; }
        public virtual string ImageUrl { get; set; }
        public virtual string ExplainedUrl { get; set; }
        public virtual string Transcript { get; set; }
        public virtual string Explanation { get; set; }
    }

}

