export class ProjChoice{
  constructor(
    public id:string,
    public name:string,
    public proposedBy:string, 
    public status: 'topTwenty' | 'backup' | 'underConsideration' | 'notUnderConsideration'
      ){}
}
