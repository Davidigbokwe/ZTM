function bbnaija_housemate_check(housemate_name){
	var eviction_status;

	switch(housemate_name){

		case 'Erica':
		eviction_status = 'Not Evicted';
		break;
		case 'laycon':
		eviction_status = 'Not Evicted';
		break;
		case 'ozo':
		eviction_status = 'Not Evicted';
		break;
		case 'praise':
		eviction_status = 'Not Evicted';
		break;
		case 'Nengi':
		eviction_status = 'Not Evicted';
		break;
		case 'kaisha':
		eviction_status = 'Evicted';
		break;
		case 'Kidd':
		eviction_status = 'Not Evicted';
		break;
	}

	return eviction_status;

}