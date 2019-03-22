
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Apollo
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'; //our test Graphql Server which returns rates
const uri = 'http://localhost:4000'; //our test Graphql Server which returns rates
@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})

export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri : uri }),
      cache: new InMemoryCache()
    });
  }
}