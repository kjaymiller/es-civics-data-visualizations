import {  
    EuiPage,
    EuiPageBody,
    EuiPageHeader,
    EuiPageContent,
    EuiButtonEmpty,
    EuiIcon,
    EuiFlexGrid,
    EuiFlexItem,
    EuiSpacer,
    EuiCard,
    EuiLink,
 } from '@elastic/eui';
 import Charter from './demo_charts.js';

function learn (link) {
  return (
    <EuiLink href={link} target="_blank">
    <EuiButtonEmpty 
      color="text"
      href="{link}"
      target="_blank"
      size="xs"
      iconType="link"
      aria-label='Visit Dataset Website'>Learn More</EuiButtonEmpty>
      </EuiLink>)};

function contribute(link) {
  return (<EuiLink href={link} target="_blank">
            <EuiButtonEmpty
              size="xs"
              color="text"
              iconType="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              aria-label="Visit GitHub"
            >View GitHub Repo</EuiButtonEmpty>
            </EuiLink>);};

 const report = <EuiButtonEmpty
    iconSize="l"
    size="xs"
    isDisabled
    display="fill"
    iconType="alert"
    aria-label="Report Issue">Report</EuiButtonEmpty>
    ;

function Topic(title, description, website, repo, visualizations) {
  this.title = title;
  this.description = description;
  this.visualizations = visualizations;
  this.website = website;
  this.repo = repo;

}

function Visualization(title, description, data){
    this.title = title;
    this.description = description;
    this.data = data;
}

function TopicView (){

    const topic = new Topic(
        'Seattle PD Terry Stops',
        "This data represents records of Seattle Police Department reported stops under Terry v. Ohio, 392 U.S. 1 (1968)",
        "https://data.seattle.gov/Public-Safety/Terry-Stops/28ny-9ts8",
        "https://github.com/kjaymiller/es-seattle-terry-stops",
        [
          new Visualization('Stops by Age Group', 'This visualization shows the number of stops by age group', 'data/seattle-terry-stops-age-group.json'),
          new Visualization('Percentage of Resolutions of Stops', 'This visualization shows the percentage of how stops are resolved', 'data/seattle-terry-stops-resolutions.json'),
        ],
    )

    return (
        <EuiPage>
            <EuiPageBody restrictWidth={ '85%'}>
                <EuiPageHeader 
                    pageTitle = {topic.title}
                    description = {topic.description}
                    rightSideItems={[learn(topic.website), contribute(topic.repo), report]}
                    />    
                    <EuiPageContent
                      restrictWidth={ '75%'}
                      color="transparent">
                    <EuiSpacer size='xxl' />
                    <EuiPageContent 
                        paddingSize='none'
                        color="transparent">
                        <EuiFlexGrid columns={2}>
                            { topic.visualizations.map((visualization) => (
                                <EuiFlexItem>
                                <EuiCard
                                  icon={<EuiIcon size="xl" type="visualizeApp" />}
                                  title= {visualization.title}
                                  description= {visualization.description}
                                 />
                                 </EuiFlexItem>
                            ))}
                            </EuiFlexGrid>
                            <Charter /> 
                      </EuiPageContent>
                      </EuiPageContent>
            </EuiPageBody>
        </EuiPage>
    );
}

export default TopicView;