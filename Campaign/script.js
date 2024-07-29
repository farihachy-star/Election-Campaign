let campaignNames = [];

function generateNames() {
    const campaignName = document.getElementById('campaign-name').value.replace(/\s+/g, '_');
    const accountClient = document.getElementById('account-client').value.replace(/\s+/g, '_');
    const campaignCandidate = document.getElementById('campaign-candidate').value.replace(/\s+/g, '_');
    const state = document.getElementById('state').value.replace(/\s+/g, '_');
    const office = document.getElementById('office').value.replace(/\s+/g, '_');
    const aedmsSdems = document.getElementById('aedms-sdems').value.replace(/\s+/g, '_');
    const startDate = document.getElementById('start-date').value.replace(/\s+/g, '_');
    const endDate = document.getElementById('end-date').value.replace(/\s+/g, '_');
    const year = document.getElementById('year').value.replace(/\s+/g, '_');

    const fullName = [
        campaignName,
        accountClient,
        campaignCandidate,
        state,
        office,
        aedmsSdems,
        startDate,
        endDate,
        year
    ].filter(Boolean).join('_');

    if (fullName) {
        campaignNames.push(fullName);
    }

    displayNames();
    openModal();
}

function generateAdGroupName() {
    const adGroupName = document.getElementById('ad-group-name').value.replace(/\s+/g, '_');
    const accountClientAd = document.getElementById('account-client-ad').value.replace(/\s+/g, '_');
    const campaignCandidateAd = document.getElementById('campaign-candidate-ad').value.replace(/\s+/g, '_');
    const stateAd = document.getElementById('state-ad').value.replace(/\s+/g, '_');
    const district = document.getElementById('district').value.replace(/\s+/g, '_');
    const startDateAd = document.getElementById('start-date-ad').value.replace(/\s+/g, '_');
    const endDateAd = document.getElementById('end-date-ad').value.replace(/\s+/g, '_');
    const platform = document.getElementById('platform').value.replace(/\s+/g, '_');
    const mediaType = document.getElementById('media-type').value.replace(/\s+/g, '_');
    const cpm = document.getElementById('cpm').value.replace(/\s+/g, '_');
    const targetingType = document.getElementById('targeting-type').value.replace(/\s+/g, '_');
    const dataSource = document.getElementById('data-source').value.replace(/\s+/g, '_');
    const audience = document.getElementById('audience').value.replace(/\s+/g, '_');

    const fullAdGroupName = [
        adGroupName,
        accountClientAd,
        campaignCandidateAd,
        stateAd,
        district,
        startDateAd,
        endDateAd,
        platform,
        mediaType,
        cpm,
        targetingType,
        dataSource,
        audience
    ].filter(Boolean).join('_');

    if (fullAdGroupName) {
        campaignNames.push(fullAdGroupName);
    }

    displayNames();
    openModal();
}

function resetForm() {
    document.querySelectorAll('input, select').forEach(element => element.value = '');
    campaignNames = [];
}

function displayNames() {
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
    campaignNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function openModal() {
    document.getElementById('name-list-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('name-list-modal').style.display = 'none';
}
