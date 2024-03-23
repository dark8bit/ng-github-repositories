export interface Commit {
  sha: string;
  node_id: string;
  commit: CommitClass;
  url: string;
  html_url: string;
  comments_url: string;
  author: CommitAuthor;
  committer: CommitAuthor;
  parents: any[];
}

interface CommitAuthor {
}

interface CommitClass {
  author: CommitAuthorClass;
  committer: CommitAuthorClass;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

interface CommitAuthorClass {
  name: string;
  email: string;
  date: Date;
}

interface Tree {
  sha: string;
  url: string;
}

interface Verification {
  verified: boolean;
  reason: string;
  signature: null;
  payload: null;
}
