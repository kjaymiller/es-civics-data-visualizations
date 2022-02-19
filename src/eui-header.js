import {
    EuiHeader,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiHeaderLogo,
} from '@elastic/eui';

function Header() {
    return (
        <EuiHeader>
        <EuiHeaderSection grow={false}>
          <EuiHeaderSectionItem border="right">
            <EuiHeaderLogo>ES Civics Visualization</EuiHeaderLogo>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
        <EuiHeaderLinks side="right">
          <EuiHeaderLink href="#">About</EuiHeaderLink>
          <EuiHeaderLink href="#">Contribute</EuiHeaderLink>
          <EuiHeaderLink href="#" iconType="help">Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeader>
);
}

export default Header;
