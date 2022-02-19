import {  
    EuiPage,
    EuiPageBody,
    EuiPageHeader,
    EuiPageContent,
    EuiPageContentBody,
    EuiButton,
    EuiButtonIcon,
    EuiFlexGrid,
    EuiFlexItem,
    EuiIcon,
    EuiSpacer,
    EuiText,
    EuiLink,
    EuiCard,
 } from '@elastic/eui';

const button = <EuiButton color="text" href="#" aria-label='Learn More'>Learn More</EuiButton>;

const contribute = <EuiButtonIcon
    iconSize="l" 
    size="l"
    color="text"
    iconType="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Octicons-octoface.svg/1920px-Octicons-octoface.svg.png"
    aria-label="Visit GitHub"
    />;

 const report = <EuiButtonIcon 
    iconSize="l"
    size="l"
    color="danger"
    iconType="alert"
    aria-label="Report Issue"
    />;

const options = ['Culpa culpa sit nostrud nulla.', 'Velit cillum sit et eu sunt magna', 'Incididunt irure ex mollit deserunt'];

function Topic (){
    return (
        <EuiPage>
            <EuiPageBody restrictWidth={ '75%'}>
                <EuiPageHeader 
                    pageTitle="Test" 
                    rightSideItems={[report, contribute, button]}
                    />    
                    <EuiPageContent restrictWidth={ '75%'}>
                        <EuiPageContentBody
                            restrictWidth={ '90%' }>
                            Anim Lorem fugiat pariatur ipsum ullamco labore adipisicing Lorem culpa velit quis. Id excepteur pariatur eiusmod ad occaecat quis velit exercitation dolore ea ad fugiat enim ex. Sint quis cillum Lorem mollit do irure commodo est voluptate aliqua amet reprehenderit nulla. Ex elit ullamco adipisicing labore laborum nisi veniam quis aliquip in enim. Eiusmod culpa aliqua nulla incididunt minim ex nulla. Do Lorem labore non in ullamco dolor et labore magna nisi anim minim minim ullamco.
                        </EuiPageContentBody>
                    </EuiPageContent>
                    <EuiSpacer size='xxl' />
                    <EuiPageContent 
                        paddingSize='none'
                        color="transparent">
                        <EuiFlexGrid columns={2}>
                            { options.map((option) => (
                                <EuiFlexItem>
                                <EuiCard
                                   icon={<EuiIcon size="xxl" type="devToolsApp" />}
                                   title="Developers Tools"
                                   description="Example of a short card description."
                                   footer={
                                     <div>
                                       <EuiButton aria-label="Go to Developers Tools">Go for it</EuiButton>
                                       <EuiSpacer size="xs" />
                                       <EuiText size="s">
                                         <p>
                                           Or try <EuiLink href="http://google.com">this</EuiLink>
                                         </p>
                                       </EuiText>
                                     </div>
                                   }
                                 />
                                 </EuiFlexItem>
                            ))}
                            </EuiFlexGrid>
                    </EuiPageContent>
            </EuiPageBody>
        </EuiPage>
    );
}

export default Topic;